onload = function()
{
    const container=document.getElementById('container');
    const getNew=document.getElementById('newgraph');
    const options={
        edges:{
            labelHighlightBold: true,
            font: {
                size: 20
            },
            shadow:true,
            smooth:true,
            scaling:{
                label:true,
            },
            hoverWidth:4.5
        },
        nodes: {
            font: '14px Courier grey',
            scaling: {
                label: true
            },
            shadow:true,
            // smooth:true,
           physics:true,
        //    scaling:{
        //        min:1,
        //        max:15,

        //    },
        
            shape: 'icon',
            labelHighlightBold: true,
            icon: {
                face: 'FontAwesome',
                code: '\uf041',
                size: 40,
                color: 'blue'
                
            },
            
            
            
        }
    };

    //intisliseing the network
    let print=1;
    let gr;
    let cities;
    let len;
    let hash= new Array(len);
    // let cities=[];
    const network=new vis.Network(container);
    network.setOptions(options);

    function createData(){
        cities=['Delhi','Lucknow','Jaipur','Shimla','Agra',
                'Chandigarh','Gurgaon','Jaladhar','Kanpur','Prayagraj',
                'Varanasi','Gorakhpur','Ajmer','Jodhpur','Udaipur',
                'Indore','Dehradun','Haridwar','Ludhiana','Gwalior',
                'Patna'];
        len=cities.length;
        //putting the label on the node
        let vertices=[];
        
        for(let i=0;i<cities.length;i++)
        {
            vertices.push({id:i,label:cities[i]});
            
            hash[cities[i]]=i;
        }
        console.log("hash",hash);

        let edges=[];
         gr=new Array(cities.length);
       
        // for(let i=1;i<cities.length;i++)
        // {
        //     let neigh=Math.floor(Math.random()*i);
        //     let temp=String(Math.floor(Math.random()*70)+30);
        //     edges.push({from :i , to:neigh,color:'green',label:temp});
            
            

        // }
        //putting up city manullay whcih will same as what we will use in dijkstra algorithm later in the code

        //Delhi --> 0
        edges.push({from:0,to:1,color:'green',label:String(45)});
        edges.push({from:0,to:2,color:'green',label:String(35)});
        edges.push({from:0,to:3,color:'green',label:String(55)});
        edges.push({from:0,to:4,color:'green',label:String(65)});
        edges.push({from:0,to:5,color:'green',label:String(25)});
        edges.push({from:0,to:6,color:'green',label:String(117)});
        edges.push({from:0,to:9,color:'green',label:String(95)});
        edges.push({from:0,to:10,color:'green',label:String(97)});
        edges.push({from:0,to:16,color:'green',label:String(88)});
        edges.push({from:0,to:18,color:'green',label:String(98)});



        //lucknow -->1
        edges.push({from:1,to:7,color:'green',label:String(67)});
        edges.push({from:1,to:8,color:'green',label:String(121)});
        edges.push({from:1,to:9,color:'green',label:String(15)});
        edges.push({from:1,to:10,color:'green',label:String(85)});

        //jaipur --> 2
        edges.push({from:2,to:13,color:'green',label:String(15)});
        edges.push({from:2,to:14,color:'green',label:String(5)});
        edges.push({from:2,to:15,color:'green',label:String(85)});
        edges.push({from:2,to:16,color:'green',label:String(35)});

        //shimla --> 3
        edges.push({from:3,to:17,color:'green',label:String(21)});
        edges.push({from:3,to:16,color:'green',label:String(5)});
        edges.push({from:3,to:18,color:'green',label:String(15)});

        //agra --> 4
        edges.push({from:4,to:1,color:'green',label:String(11)});
        edges.push({from:4,to:8,color:'green',label:String(21)});
        edges.push({from:4,to:2,color:'green',label:String(26)});
        edges.push({from:4,to:19,color:'green',label:String(21)});

        //Chandigarh --> 5

        edges.push({from:5,to:6,color:'green',label:String(92)});
        edges.push({from:5,to:7,color:'green',label:String(21)});
        edges.push({from:5,to:18,color:'green',label:String(11)});
        edges.push({from:5,to:16,color:'green',label:String(101)});

        //gurgoan --> 6
        edges.push({from:6,to:2,color:'green',label:String(21)});
        edges.push({from:6,to:3,color:'green',label:String(121)});
        edges.push({from:6,to:18,color:'green',label:String(71)});
        edges.push({from:6,to:17,color:'green',label:String(21)});

        //ajmer --> 12
        edges.push({from:12,to:2,color:'green',label:String(37)});
        edges.push({from:12,to:15,color:'green',label:String(43)});


        //gorakhpur -->11
        edges.push({from:11,to:20,color:'green',label:String(76)});
        edges.push({from:11,to:1,color:'green',label:String(17)});
        edges.push({from:11,to:10,color:'green',label:String(61)});


        





        


























        ///////



        console.log(edges);
        console.log("print");
        const data={
            nodes:vertices,
            edges:edges
        };
        return data;
    }

    getNew.onclick=function(){
        if(print)
        {
            let data=createData();
            network.setData(data);
            print=0;
        }
        else{
            console.log("in else");
            // console.log(gr);
            print =1;
            // let d=new Array();
            // let gr1=createGraph(gr,len);


            // creating node for every city and linking them putting weight on them that weight is accident on that road on the ratio of 100
            //[a,b,c] // --->> a represnt the node of one city having road with city and having weight of c which is accident ratio 
            let E = [[0,1,4],
                     [0,7,8], 
                     [1,7,11], 
                     [1,2,8], 
                     [7,8,7], 
                     [6,7,1], 
                     [2,8,2],
                     [6,8,6], 
                     [5,6,2], 
                     [2,5,4], 
                     [2,3,7], 
                     [3,5,14], 
                     [3,4,9], 
                     [4,5,10]
                    ];
            

            // let E= [[0,1,45],[0,2,35],[0,3,55],[0,4,65],[0,5,25],[0,6,117],[0,9,95],[0,10,97],[0,16,88],[0,18,98],
            //         [1,7,67],[1,8,121],[1,9,15],[1,10,85],
            //         [2,13,15],[2,14,5],[2,15,85],[2,16,35],
                    
            //     ];

            let graph1 = createGraph(len,E);
            let distances = dijkstra(graph1,len,0);//after len put src
            // console.log(dijkstra(gr,len,0));
            console.log(distances);

            /// -------->>>> creating output graph

            let res=[];/// equivalent ot edges
            let vertices_name=[];
            let dest=5;
            while(dest!=0)
            {
                res.push({from:dest,to:distances[dest][1],color:'green',label:String(65)});
                // vertices.push({id:i,label:cities[i]});
                vertices_name.push({id:dest,label:cities[dest]});

                dest=distances[dest][1];
                

            }

            const data_new={
                nodes:vertices_name,
                edges:res
            };
            network.setData(data_new);


            





            // console.log(d);
        }
    };
    getNew.click();

    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = 7;
    canvas.height = 3;


    // creating graph
    function createGraph(V,E){
        // V - Number of vertices in graph
        // E - Number of edges in graph (u,v,w)
        let adj_list = []; // Adjacency list
        for(let i = 0 ; i < V ; i++){
            adj_list.push([]);
        }
        for(let i = 0 ; i < E.length ; i++){
            adj_list[E[i][0]].push([E[i][1],E[i][2]]);
            adj_list[E[i][1]].push([E[i][0],E[i][2]]);
        }
        return adj_list;
    }





    ///////////////////
    function dijkstra(graph ,V,src)
    {
        
        // let vis = Array(V).fill(0);
        // let dist = [];
        // for(let i=0;i<V;i++)
        //     dist.push([10000,-1]);
        // dist[src][0] = 0;

        // for(let i=0;i<V-1;i++){
        //     let mn = -1;
        //     for(let j=0;j<V;j++){
        //         if(vis[j]===0){
        //             if(mn===-1 || dist[j][0]<dist[mn][0])
        //                 mn = j;
        //         }
        //     }

        //     vis[mn] = 1;
        //     for(let j=0;j<graph[mn].length;j++){
        //         let edge = graph[mn][j];
        //         if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1]){
        //             dist[edge[0]][0] = dist[mn][0]+edge[1];
        //             dist[edge[0]][1] = mn;
        //         }
        //     }
        // }

        // return dist;

        let vis=Array(V).fill(0);//for checking if it's value is finalised
        let dist=[];


        for(let i=0;i<V;i++)
        {
            dist.push([1000,-1]);

        }
        dist[src][0]=0;
        for(let i=0;i<V-1;i++)
        {
            let mn=-1;//store the index of min element
            for(let j=0;j<V;j++)
            {
                if(vis[j]==0)
                {
                    if(mn==-1 || dist[j][0]<dist[mn][0])
                    {
                        mn=j;
                    }
                }
            }
            vis[mn]=1;

            for(let j=0;j<graph[mn].length;j++)
            {
                let edge=graph[mn][j];
                if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1])
                {
                    dist[edge[0]][0]=dist[mn][0]+edge[1];
                    dist[edge[0]][1]=mn;
                }

            }
        }
        return dist;
    }






    let source_city;
    let destination_city;
    // let ch_a=1;
    // let ch_b=1;
    //for drop down
   

    var mySelect = document.getElementById('mySelect');

    mySelect.onchange = function() {
        var x = document.getElementById("mySelect").value;
        source_city=x;
        console.log(source_city);
        console.log(hash[source_city]);

        document.getElementById("demo").innerHTML = "You selected: " + x;
        ch_a=0;
    }

    var mySelect1 = document.getElementById('mySelect1');

    mySelect1.onchange = function() {
        var y = document.getElementById("mySelect1").value;
        destination_city=y;
        console.log(destination_city);
        console.log(hash[destination_city]);
        document.getElementById("demo1").innerHTML = "You selected: " + y;
        ch_b=0;
    }
    // // console.log(hash[source_city]);
    
    // // {
    //     console.log('hasing using for printing index of city');
    //     console.log(hash[source_city]);
        
    // // }




    

};




//dijksrta implementation

// function dijkstra(graph ,V,src)
// {
//     let vis=Array(V).fill(0);//for checking if it's value is finalised
//     let dist=[];


//     for(let i=0;i<V;i++)
//     {
//         dist.push([1000,-1]);

//     }
//     dist[src][0]=0;
//     for(let i=0;i<V-1;i++)
//     {
//         let mn=-1;//store the index of min element
//         for(let j=0;j<V;j++)
//         {
//             if(vis[j]==0)
//             {
//                 if(mn==-1 || dist[j][0]<dist[mn][0])
//                 {
//                     mn=j;
//                 }
//             }
//         }
//         vis[mn]=1;

//         for(let j=0;j<graph[mn].length;j++)
//         {
//             let edge=graph[mn][j];
//             if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1])
//             {
//                 dist[edge[0]][0]=dist[mn][0]+edge[1];
//                 dist[edge[0]][1]=mn;
//             }

//         }
//     }
//     return dist;


// }

