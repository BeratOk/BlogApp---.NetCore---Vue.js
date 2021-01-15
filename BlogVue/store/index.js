export const state = () =>({
        posttitle:'',
        postdescription:'',
        postdate:'',
        postcategory:'',
        posts:[],
        editPostId:16
    });
    
export const mutations={
        addPostId(state,data){
            state.postId=data
        },
        getPostTitle(state,data){
            state.posttitle=data
            
        },
        getPostDesc(state,data){
            state.postdescription=data

        },
        getPostDate(state,data){
            state.postdate=data

        },
        getPostCateg(state,data){
            state.postcategory=data

        },
        getPosts(state,data){
            state.posts=data
        },
        editPostId(state,data){
            state.editPostId=data
        }
    };
    export const actions={
        addPostId({commit},data){
            commit("addPostId",data)
        },
        getPostTitle({commit},data){
            commit("getPostTitle",data)
        },
        getPostDesc({commit},data){
            commit("getPostDesc",data)
        },
        getPostDate({commit},data){
            commit("getPostDate",data)
        },
        getPostCateg({commit},data){
            commit("getPostCateg",data)
        },
        getPosts({commit},data){
            commit("getPosts",data)
        },
        editPostId({commit},data){
            commit("editPostId",data)
        }
    };
    export const getters={
        getPostId(state){
            return state.postId
        }
    };
