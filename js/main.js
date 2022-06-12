const app = Vue.createApp({
    data() {
        return{
            products:[
                {id:1, title:"TAG 1000 (TAG 853)", short_text:'Tomato Determinate Red Standard Round', image:'images/tag100000.PNG', desc:"Full dseec"},
                {id:2, title:"TAG 1001 (TAG 855)", short_text:'Tomato Determinate Red Standard Round', image:'images/tag1001.png', desc:"Full dseec"},
                {id:3, title:"TAG 1002 (TAG 809)", short_text:'Tomato Determinate Red Standard Round', image:'images/tag1002.png', desc:"Full dseec"},
                {id:4, title:"TAG 1003 (TAG 834)", short_text:'Tomato Determinate Red Standard Round', image:'images/tag1003.png', desc:"Full dseec"},
                {id:5, title:"TAG 1004 (TAG 848)", short_text:'Tomato Determinate Red BEEF Round', image:'images/tag1004.png', desc:"Full dseec"},
                {id:6, title:"TAG 1005 (TAG 800)", short_text:'Tomato Determinate Red Standard Round', image:'images/tag1005.png', desc:"Full dseec"},
                {id:7, title:"TAG 1006 (TAG 898)", short_text:'Tomato Determinate Red Elongated', image:'images/tag1006.png', desc:"Full dseec"},
                {id:8, title:"TAG 1000 (TAG 853)", short_text:'Tomato Determinate Red Elongated', image:'images/tag1007.png', desc:"Full dseec"},
        ],
    
            product:[
                btnVisible = 0,
            ]
        }
},
    methods: {
        getProduct: function(){
            if (window.location.hash){
                var id = window.location.hash.replace('#', '');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        }
    },
    mounted:function() {
        this.getProduct();
    },
}).mount('#app');


