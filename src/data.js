const pagesKey = 'pages';

let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

function  saveDataToLocalStorage(){
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
    getAllPages(){
        return pagesStore;
    },

    getSinglePage(index){
        return pagesStore[index];
    },

    editPage(index, page){
        pagesStore[index] = page;
        saveDataToLocalStorage()
    },
    addPage(page){
        pagesStore.push(page);
        saveDataToLocalStorage()
    },
    removePage(index){
        pagesStore.splice(index, 1);
        saveDataToLocalStorage()
    },

}