import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ComicDetailsComponent } from './components/comics/comic-details/comic-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/comics', pathMatch: 'full' },
    { path: 'comics', component: ComicsComponent,
        children: [
            {
                path: ':num',
                component: ComicDetailsComponent
            }
        ]
    },
    { path: 'archive', component: ArchiveComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
