<template>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link to="/pages/create" class="btn btn-primary btn-sm">New Page</router-link>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)" style="cursor: pointer;">
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? '✓' : 'x' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

const $pages = inject('$pages');
const router = useRouter();

function goToPage(index) {
    router.push(`/pages/${index}/edit`);
}

</script>