import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import 'chart.js/dist/Chart';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './common/modules/appRouting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialComponentsModule } from './common/modules/ngMaterialComponents.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/canvas/header/header.component';
import { NavigationComponent } from './common/components/canvas/header/navigation/navigation.component';
import { CanvasComponent } from './common/components/canvas/canvas.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { NoDataComponent } from './common/components/no-data/no-data.component';
import { NotificationsDialogComponent } from './common/components/canvas/header/navigation/actions/notifications-dialog/notifications-dialog.component';
import { LoginDialogComponent } from './common/components/canvas/header/navigation/actions/login-dialog/login-dialog.component';
import { ActionsComponent } from './common/components/canvas/header/navigation/actions/actions.component';
import { ContentComponent } from './common/components/canvas/content/content.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './dashboard/widget/widget.component';
import { HomeComponent } from './home/home.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';

import { Enum2stringService } from './common/services/enum2string.service';
import { GetUsersService } from './common/services/getUsers.service';
import { GetExercisesService } from './common/services/getExercises.service';
import { AppStoreService } from './common/services/appStore.service';
import { ToggleSidebarService } from './common/services/toggleSidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    WidgetComponent,
    NotificationsDialogComponent,
    LoginDialogComponent,
    NavigationComponent,
    HeaderComponent,
    CanvasComponent,
    SidebarComponent,
    DataGridComponent,
    NoDataComponent,
    LoginComponent,
    SettingsComponent,
    LoginDialogComponent,
    ActionsComponent,
    ContentComponent
  ],
  entryComponents: [
    NotificationsDialogComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialComponentsModule,
    ChartsModule
  ],
  providers: [
    AppStoreService,
    Enum2stringService,
    GetUsersService,
    GetExercisesService,
    ToggleSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
