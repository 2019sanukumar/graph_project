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
                code: '\uf015',
                size: 40,
                color: '#991133',
            }
        }
    };

    //intisliseing the network

    const network=new vis.Network(container);
    network.setOptions(options);

    function createData(){
        const cities=['Patna','Delhi','Lucknow','Goa','jammu','Himachal','Itanagar','jaladhar'];

        //putting the label on the node
        let vertices=[];
        for(let i=0;i<cities.length;i++)
        {
            vertices.push({id:i,label:cities[i]});
        }

        let edges=[];
        // deciding edges of the graph and putting weight on it
        for(let i=1;i<cities.length;i++)
        {
            let neigh=Math.floor(Math.random()*i);
            edges.push({from :i , to:neigh,color:'orange',label:String(Math.floor(Math.random()*70)+30)});

        }

        const data={
            nodes:vertices,
            edges:edges
        };
        return data;
    }

    getNew.onclick=function(){
        let data=createData();
        network.setData(data);
    };
    getNew.click();




};


