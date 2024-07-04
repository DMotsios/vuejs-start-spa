<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'vanbar', 'navbar-expand-lg']">
        <div class="container-fluid" style="display: flex; padding:10px;">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link :page="page" :index="page.index" v-for="(page) in publishedPages" class="nav-item"
                    :key="page.index">
                </navbar-link>

                <li> <router-link :to="`/pages`" class="nav-link" aria-current="page" style="margin-right: 5px;"
                        active-class="active">
                        Pages</router-link></li>
            </ul>
            <button class="btn btn-primary" @click.prevent="changeTheme()">
                Toggle
            </button>

        </div>
    </nav>

</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
    components: {
        NavbarLink
    },
    inject: ['$pages', '$bus'],
    computed: {
        publishedPages() {
            return this.pages.map((page, index) => ({ ...page, index })).filter(page => page.published);
        }
    },
    created() {
        this.getThemeSetting()
        this.pages = this.$pages.getAllPages();
        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
        this.$bus.$on('page-created', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
        this.$bus.$on('page-deleted', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
    },
    data() {
        return {
            theme: 'light',
            pages: []
        }
    },
    methods: {
        changeTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            this.storeThemeSetting()
        },

        storeThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },

        getThemeSetting() {
            let theme = localStorage.getItem('theme')
            if (theme) {
                this.theme = theme
            } else {
                theme = 'light';
            }
        }
    }
}
</script>