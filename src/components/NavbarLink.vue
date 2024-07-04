<template>
    <li>
        <router-link :to="`/${index}`" class="nav-link" active-class="active" aria-current="page"
             style="margin-right: 5px;" :title="`Go to ${page.link.text}`">{{
                page.link.text }}</router-link>
    </li>

</template>

<script>
export default {
    props: ['page', 'index'],
}
</script>
