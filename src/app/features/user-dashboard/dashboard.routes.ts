import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
    {
        path:"",
        loadComponent:()=>
            import('./user/user')
        .then(c=> c.User),

        children:[
            {
                path:"",
                data: { title: 'Overview' },
                loadComponent:()=>
                    import('../../layout/dashboard/overview/overview')
                .then(c=> c.Overview)
            },
            {
                 path:"profile",
                 data: { title: 'Profile' },
                loadComponent:()=>
                    import('../../layout/dashboard/profile/profile')
                .then(c=> c.Profile)   
            },
            {
                 path:"appointments",
                 data: { title: 'Appointments' },
                loadComponent:()=>
                    import('../../layout/dashboard/appointments/appointments')
                .then(c=> c.Appointments)
            },
            {
                  path:"doctors",
                  data: { title: 'Doctors' },
                loadComponent:()=>
                    import('../../layout/dashboard/doctors/doctors')
                .then(c=> c.Doctors)
            },
            {
                  path:"settings",
                  data: { title: 'Settings' },
                loadComponent:()=>
                    import('../../layout/dashboard/settings/settings')
                .then(c=> c.Settings)
            }
         
        ]
    }
]