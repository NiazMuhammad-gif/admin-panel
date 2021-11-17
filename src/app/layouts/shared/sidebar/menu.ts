
import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    // {
    //     id:2,
    //     label:'ADMIN.TEXT',
    //     icon:'ri-admin-line',
    //     subItems:[
    //         {
    //             id:4,
    //             label: 'ADMIN.LIST.MANAGEUSER',
    //             link: '/tables/userTable'
    //         }
    //     ]
    // },
    {
        id: 3,
        label: 'MENUITEMS.USERS.TEXT',
        icon: 'ri-store-2-line',
        link: '/tables/userTable'
    },
    {
        id: 4,
        label: 'MENUITEMS.ADSSTATUS.TEXT',
        icon: 'ri-artboard-2-line',
        link: '/'
    },
    {
        id: 5,
        label: 'MENUITEMS.PREMIUMMEMBERSETUP.TEXT',
        icon: 'ri-store-2-line',
        link: '/'
    },
    {
        id: 6,
        label: 'MENUITEMS.ADSSETUP.TEXT',
        icon: 'ri-profile-line',
        link: '/'
    },
    // {
    //     id: 3,
    //     label: 'MENUITEMS.CALENDAR.TEXT',
    //     icon: 'ri-calendar-2-line',
    //     link: '/calendar'
    // },
    // {
    //     id: 4,
    //     label: 'MENUITEMS.CHAT.TEXT',
    //     icon: 'ri-chat-1-line',
    //     link: '/chat'
    // },
    // {
    //     id: 5,
    //     label: 'MENUITEMS.ECOMMERCE.TEXT',
    //     icon: 'ri-store-2-line',
    //     subItems: [
    //         {
    //             id: 6,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
    //             link: '/ecommerce/products',
    //             parentId: 5
    //         },
    //         {
    //             id: 8,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
    //             link: '/ecommerce/orders',
    //             parentId: 5
    //         },
    //         {
    //             id: 9,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
    //             link: '/ecommerce/customers',
    //             parentId: 5
    //         },
    //         {
    //             id: 10,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.CART',
    //             link: '/ecommerce/cart',
    //             parentId: 5
    //         },
    //         {
    //             id: 11,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
    //             link: '/ecommerce/checkout',
    //             parentId: 5
    //         },
    //         {
    //             id: 12,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
    //             link: '/ecommerce/shops',
    //             parentId: 5
    //         },
    //         {
    //             id: 13,
    //             label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
    //             link: '/ecommerce/add-product',
    //             parentId: 5
    //         },
    //     ]
    // },
    // {
    //     id: 14,
    //     label: 'MENUITEMS.EMAIL.TEXT',
    //     icon: 'ri-mail-send-line',
    //     subItems: [
    //         {
    //             id: 15,
    //             label: 'MENUITEMS.EMAIL.LIST.INBOX',
    //             link: '/email/inbox',
    //             parentId: 14
    //         },
    //         {
    //             id: 16,
    //             label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
    //             link: '/email/read',
    //             parentId: 14
    //         }
    //     ]
    // },
    // {
    //     id: 15,
    //     label: 'MENUITEMS.KANBAN.TEXT',
    //     icon: 'ri-artboard-2-line',
    //     link: '/kanban-board'
    // },
    // {
    //     id: 16,
    //     isLayout: true
    // },
    // {
    //     id: 17,
    //     label: 'MENUITEMS.PAGES.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 18,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'ri-account-circle-line',
    //     subItems: [
    //         {
    //             id: 19,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
    //             link: '/pages/login-1',
    //             parentId: 18
    //         },
    //         {
    //             id: 20,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
    //             link: '/pages/register-1',
    //             parentId: 18
    //         },
    //         {
    //             id: 21,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
    //             link: '/pages/recoverpwd-1',
    //             parentId: 18
    //         },
    //         {
    //             id: 22,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
    //             link: '/pages/lock-screen-1',
    //             parentId: 18
    //         }
    //     ]
    // },
    // {
    //     id: 23,
    //     label: 'MENUITEMS.UTILITY.TEXT',
    //     icon: 'ri-profile-line',
    //     subItems: [
    //         {
    //             id: 24,
    //             label: 'MENUITEMS.UTILITY.LIST.STARTER',
    //             link: '/pages/starter',
    //             parentId: 23
    //         },
    //         {
    //             id: 25,
    //             label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
    //             link: '/pages/maintenance',
    //             parentId: 23
    //         },
    //         {
    //             id: 26,
    //             label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
    //             link: '/pages/coming-soon',
    //             parentId: 23
    //         },
    //         {
    //             id: 27,
    //             label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
    //             link: '/pages/timeline',
    //             parentId: 23
    //         },
    //         {
    //             id: 28,
    //             label: 'MENUITEMS.UTILITY.LIST.FAQS',
    //             link: '/pages/faqs',
    //             parentId: 23
    //         },
    //         {
    //             id: 29,
    //             label: 'MENUITEMS.UTILITY.LIST.PRICING',
    //             link: '/pages/pricing',
    //             parentId: 23
    //         },
    //         {
    //             id: 30,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR404',
    //             link: '/pages/404',
    //             parentId: 23
    //         },
    //         {
    //             id: 31,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR500',
    //             link: '/pages/500',
    //             parentId: 23
    //         },
    //     ]
    // },
    // {
    //     id: 32,
    //     label: 'MENUITEMS.COMPONENTS.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 33,
    //     label: 'MENUITEMS.UIELEMENTS.TEXT',
    //     icon: 'ri-pencil-ruler-2-line',
    //     subItems: [
    //         {
    //             id: 34,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    //             link: '/ui/alerts',
    //             parentId: 33
    //         },
    //         {
    //             id: 35,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    //             link: '/ui/buttons',
    //             parentId: 33
    //         },
    //         {
    //             id: 36,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    //             link: '/ui/cards',
    //             parentId: 33
    //         },
    //         {
    //             id: 37,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    //             link: '/ui/carousel',
    //             parentId: 33
    //         },
    //         {
    //             id: 38,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    //             link: '/ui/dropdowns',
    //             parentId: 33
    //         },
    //         {
    //             id: 39,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
    //             link: '/ui/grid',
    //             parentId: 33
    //         },
    //         {
    //             id: 40,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    //             link: '/ui/images',
    //             parentId: 33
    //         },
    //         {
    //             id: 41,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    //             link: '/ui/modals',
    //             parentId: 33
    //         },
    //         {
    //             id: 42,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    //             link: '/ui/rangeslider',
    //             parentId: 33
    //         },
    //         {
    //             id: 43,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    //             link: '/ui/progressbar',
    //             parentId: 33
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    //             link: '/ui/sweet-alert',
    //             parentId: 33
    //         },
    //         {
    //             id: 45,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
    //             link: '/ui/tabs-accordions',
    //             parentId: 33
    //         },
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    //             link: '/ui/typography',
    //             parentId: 33
    //         },
    //         {
    //             id: 47,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    //             link: '/ui/video',
    //             parentId: 33
    //         },
    //         {
    //             id: 48,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    //             link: '/ui/general',
    //             parentId: 33
    //         },
    //     ]
    // },
    // {
    //     id: 49,
    //     label: 'MENUITEMS.FORMS.TEXT',
    //     icon: 'ri-eraser-fill',
    //     badge: {
    //         variant: 'danger',
    //         text: '6'
    //     },
    //     subItems: [
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
    //             link: '/form/elements',
    //             parentId: 49
    //         },
    //         {
    //             id: 51,
    //             label: 'MENUITEMS.FORMS.LIST.VALIDATION',
    //             link: '/form/validation',
    //             parentId: 49
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.FORMS.LIST.ADVANCED',
    //             link: '/form/advanced',
    //             parentId: 49
    //         },
    //         {
    //             id: 53,
    //             label: 'MENUITEMS.FORMS.LIST.EDITOR',
    //             link: '/form/editor',
    //             parentId: 49
    //         },
    //         {
    //             id: 54,
    //             label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
    //             link: '/form/uploads',
    //             parentId: 49
    //         },
    //         {
    //             id: 55,
    //             label: 'MENUITEMS.FORMS.LIST.WIZARD',
    //             link: '/form/wizard',
    //             parentId: 49
    //         },
    //         {
    //             id: 56,
    //             label: 'MENUITEMS.FORMS.LIST.MASK',
    //             link: '/form/mask',
    //             parentId: 49
    //         },
    //     ]
    // },
    // {
    //     id: 57,
    //     label: 'MENUITEMS.TABLES.TEXT',
    //     icon: 'ri-table-2',
    //     subItems: [
    //         {
    //             id: 58,
    //             label: 'MENUITEMS.TABLES.LIST.BASIC',
    //             link: '/tables/basic',
    //             parentId: 57
    //         },
    //         {
    //             id: 59,
    //             label: 'MENUITEMS.TABLES.LIST.ADVANCED',
    //             link: '/tables/advanced',
    //             parentId: 57
    //         }
    //     ]
    // },
    // {
    //     id: 60,
    //     label: 'MENUITEMS.CHARTS.TEXT',
    //     icon: 'ri-bar-chart-line',
    //     subItems: [
    //         {
    //             id: 61,
    //             label: 'MENUITEMS.CHARTS.LIST.APEX',
    //             link: '/charts/apex',
    //             parentId: 60
    //         },
    //         {
    //             id: 61,
    //             label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
    //             link: '/charts/chartjs',
    //             parentId: 60
    //         },
    //         {
    //             id: 62,
    //             label: 'MENUITEMS.CHARTS.LIST.ECHART',
    //             link: '/charts/echart',
    //             parentId: 60
    //         }
    //     ]
    // },
    // {
    //     id: 63,
    //     label: 'MENUITEMS.ICONS.TEXT',
    //     icon: 'ri-brush-line',
    //     subItems: [
    //         {
    //             id: 64,
    //             label: 'MENUITEMS.ICONS.LIST.REMIX',
    //             link: '/icons/remix',
    //             parentId: 63
    //         },
    //         {
    //             id: 65,
    //             label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    //             link: '/icons/materialdesign',
    //             parentId: 63
    //         },
    //         {
    //             id: 66,
    //             label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
    //             link: '/icons/dripicons',
    //             parentId: 63
    //         },
    //         {
    //             id: 67,
    //             label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    //             link: '/icons/fontawesome',
    //             parentId: 63
    //         }
    //     ]
    // },
    // {
    //     id: 68,
    //     label: 'MENUITEMS.MAPS.TEXT',
    //     icon: 'ri-map-pin-line',
    //     subItems: [
    //         {
    //             id: 69,
    //             label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //             link: '/maps/google',
    //             parentId: 68
    //         },
    //         {
    //             id: 70,
    //             label: 'Leaflet Maps',
    //             link: '/maps/leaflet',
    //             parentId: 68
    //         },
    //     ]
    // },
    // {
    //     id: 69,
    //     label: 'MENUITEMS.MULTILEVEL.TEXT',
    //     icon: 'ri-share-line',
    //     subItems: [
    //         {
    //             id: 70,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //             link: 'javascript: void(0);',
    //             parentId: 69
    //         },
    //         {
    //             id: 71,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //             parentId: 69,
    //             subItems: [
    //                 {
    //                     id: 72,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                     link: 'javascript: void(0);',
    //                     parentId: 71,
    //                 },
    //                 {
    //                     id: 73,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                     link: 'javascript: void(0);',
    //                     parentId: 71,
    //                 }
    //             ]
    //         },
    //     ]
    // }
];


// import { MenuItem } from './menu.model';

// export const MENU: MenuItem[] = [
//     {
//         id: 1,
//         label: 'MENUITEMS.MENU.TEXT',
//         isTitle: true
//     },
//     {
//         id:30,
//         label:'ADMIN.TEXT',
//         icon:'ri-admin-line',
//         subItems:[
//             {
//                 label: 'ADMIN.LIST.MANAGECOMPANIES',
//                 link: '/tables/companyTable'
//             },
//             {
//                 label: 'ADMIN.LIST.MANAGEUSER',
//                 link: '/tables/userTable'
//             },
//             {
//                 label: 'ADMIN.LIST.COMPANIES',
//                 link: '/tables/userCompanyTable'
//             },
//             {
//                 label: 'ADMIN.LIST.COUNTRYSETUP',
//                 link: '/tables/countryTable'
//             }
//         ]
//     },
//     {
//         id:22,
//         label: 'TABLES.TEXT',
//         icon: 'ri-pencil-ruler-2-line',
//         subItems:[
//             {
//         id:12,
//         label: 'TABLES.LIST.COUNTRYTABLE',
//         icon:'ri-table-line',
//         link: '/tables/countryTable'
//     },
//     {
//         id:12,
//         label: 'TABLES.LIST.COMPANYTABLE',
//         icon:'ri-table-line',
//         link: '/tables/companyTable'
//     },
//     {
//         id:13,
//         label: 'TABLES.LIST.CITYTABLE',
//         icon:'ri-table-line',
//         link: '/tables/cityTable'
//     },
//     {
//         id:14,
//         label: 'TABLES.LIST.SUPPLIERTYPE',
//         icon:'ri-table-line',
//         link: '/tables/supplierTypeTable'
//     },
//     {
//         id:15,
//         label: 'TABLES.LIST.SALESMAN',
//         icon:'ri-table-line',
//         link: '/tables/salesmanTable'
//     },
//     {
//         id:16,
//         label: 'TABLES.LIST.ITEM',
//         icon:'ri-table-line',
//         link: '/tables/itemTable'
//     },
//     {
//         id:17,
//         label: 'TABLES.LIST.DEPARTMENT',
//         icon:'ri-table-line',
//         link: '/tables/departmentTable'
//     },
//     {
//         id:18,
//         label: 'TABLES.LIST.BRAND',
//         icon:'ri-table-line',
//         link: '/tables/brandTable'
//     },
//     {
//         id:19,
//         label: 'TABLES.LIST.SIZE',
//         icon:'ri-table-line',
//         link: '/tables/sizeTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.LEARNING',
//         icon:'ri-table-line',
//         link: '/tables/learningTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.BRANCH',
//         icon:'ri-table-line',
//         link: '/tables/branchTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.STATE',
//         icon:'ri-table-line',
//         link: '/tables/stateTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.MAKE',
//         icon:'ri-table-line',
//         link: '/tables/makeTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.PRODUCT',
//         icon:'ri-table-line',
//         link: '/tables/productTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.SEASON',
//         icon:'ri-table-line',
//         link: '/tables/seasonTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.COLOR',
//         icon:'ri-table-line',
//         link: '/tables/colorTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.UNIT',
//         icon:'ri-table-line',
//         link: '/tables/unitTable'
//     },
//     {
//         id:20,
//         label: 'TABLES.LIST.RECORD',
//         icon:'ri-table-line',
//         link: '/tables/recordTable'
//     },
//     ]
//     },
//     {
//         label:"MENUITEMS.USERCOMPANYLIST.TEXT",
//         icon: 'ri-add-fill',
//         link: '/form/userSelectCompany'
//     },
//     {
//         id: 2,
//         label: 'MENUITEMS.ADDCUSTOMER.TEXT',
//         icon: 'ri-add-fill',
//         link: '/tables/customers'
//     },
//     {
//         id: 3,
//         label: 'MENUITEMS.ADDSUPPLIER.TEXT',
//         icon: 'ri-add-fill',
//         link: '/tables/supplier'
//     },
//     {
//         id: 4,
//         label: 'MENUITEMS.PAYBILL.TEXT',
//         icon: 'ri-bank-card-line',
//         link: '/'
//     },
//     {
//         id: 5,
//         label: 'MENUITEMS.RECEIVEPAYMENT.TEXT',
//         icon: 'ri-money-dollar-circle-line',
//         link: '/'
//     },
//     {
//         id: 6,
//         label: 'MENUITEMS.ADDSALESMAN.TEXT',
//         icon: 'ri-add-fill',
//         link: '/form/salesmanForm'
//     },
//     {
//         id: 7,
//         label: 'MENUITEMS.ITEMSETUP.TEXT',
//         icon: 'ri-add-box-line',
//         link: '/tables/itemSetupTable'
//     },
//     {
//         id: 8,
//         label: 'MENUITEMS.NEWINVOICE.TEXT',
//         icon: 'ri-add-box-line',
//         link: '/tables/invoiceTable'
//     },
//     {
//         id: 9,
//         label: 'MENUITEMS.PURCHASE.TEXT',
//         icon: 'ri-bank-card-fill',
//         link: '/tables/purchaseTable'
//     },
//     {
//         id: 10,
//         label: 'MENUITEMS.BACKUPRESTORE.TEXT',
//         icon: 'ri-device-recover-line',
//         link: '/'
//     },
//     {
//         id: 11,
//         label: 'MENUITEMS.WAREHOUSE.TEXT',
//         icon: 'ri-store-line',
//         link: '/'
//     },
//     {
//         id:12,
//         label:'MENUITEMS.TABLES.TEXT',
//         isTitle: true
//     },
//     {
//         id: 18,
//         label: 'MENUITEMS.AUTHENTICATION.TEXT',
//         icon: 'ri-account-circle-line',
//         subItems: [
//             {
//                 id: 19,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
//                 link: '/pages/login-1',
//                 parentId: 18
//             },
//             {
//                 id: 20,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
//                 link: '/pages/register-1',
//                 parentId: 18
//             },
//             {
//                 id: 21,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
//                 link: '/pages/recoverpwd-1',
//                 parentId: 18
//             },
//             {
//                 id: 22,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
//                 link: '/pages/lock-screen-1',
//                 parentId: 18
//             }
//         ]
//     },
    
    
// ];
