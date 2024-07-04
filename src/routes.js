import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";
import Pages from "./components/Pages.vue";
import PagesList from "./components/PagesList.vue";
import PageEdit from "./components/PageEdit.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewer, props: true },
    {
      path: "/pages",
      component: Pages,
      children: [{ path: "", component: PagesList },
        { path: "create", component: CreatePage },
        { path: ":index/edit", component: PageEdit, props: true}
      ],
    },
    ,
  ],
});

export default router;
