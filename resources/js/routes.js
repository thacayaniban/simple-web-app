export const routes = [
    {
        name: 'All Developers',
        path: '/developer-list',
        component: () => import('./admin/AllDevelopers.vue'),
        meta: {
            title: 'All Developers'
        }
    },
    {
        name: 'Add Developer',
        path: '/developer-add',
        component: () => import('./admin/AddDeveloper.vue'),
        meta: {
            title: 'Add Developer'
        }
    },
    {
        name: 'Edit Developer',
        path: '/developer-edit/:id',
        component: () => import('./admin/EditDeveloper.vue'),
        meta: {
            title: 'Edit Developer'
        }
    }
];