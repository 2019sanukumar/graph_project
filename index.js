onload = function()
{
    const container=document.getElementById('container');
    const getNew=document.getElementById('newgraph');
    const options={
        edges:{
            labelHighlightBold: true,
            font: {
                size: 20
            }
        },
        nodes: {
            font: '12px arial red',
            scaling: {
                label: true
            },
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf041',
                size: 30,
                color: 'blue',
            }
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
        cities=['Patna','Delhi','Lucknow','Goa','jammu','Himachal','Itanagar','Jaladhar','Ranchi','Bhopal','Chennai','Banglore','Hyderabad'];
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
       
        for(let i=1;i<cities.length;i++)
        {
            let neigh=Math.floor(Math.random()*i);
            let temp=String(Math.floor(Math.random()*70)+30);
            edges.push({from :i , to:neigh,color:'orange',label:temp});
            // gr[i-1]=new Array(3);

            // gr[i-1].push([i,neigh,temp]);
            

        }
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
            let E = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
                    [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

            let graph1 = createGraph(len,E);
            let distances = dijkstra(graph1,len,0);
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
    canvas.width  = 10;
    canvas.height = 4;


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
        
        let vis = Array(V).fill(0);
        let dist = [];
        for(let i=0;i<V;i++)
            dist.push([10000,-1]);
        dist[src][0] = 0;

        for(let i=0;i<V-1;i++){
            let mn = -1;
            for(let j=0;j<V;j++){
                if(vis[j]===0){
                    if(mn===-1 || dist[j][0]<dist[mn][0])
                        mn = j;
                }
            }

            vis[mn] = 1;
            for(let j=0;j<graph[mn].length;j++){
                let edge = graph[mn][j];
                if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1]){
                    dist[edge[0]][0] = dist[mn][0]+edge[1];
                    dist[edge[0]][1] = mn;
                }
            }
        }

        return dist;


    }

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

