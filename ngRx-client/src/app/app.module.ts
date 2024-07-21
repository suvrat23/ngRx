import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MastComponent } from './components/mast/mast.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import {RouterModule} from '@angular/router';
import { GmApplicationFooterModule} from '@gds/prime-ng/application-footer';
import { GmApplicationSearchModule} from '@gds/prime-ng/application-search';
import { GmApplicationTitleModule} from '@gds/prime-ng/application-title';
import { GmBreadcrumbModule} from '@gds/prime-ng/breadcrumb';
import { GmEntityModule} from '@gds/prime-ng/entity';
import { GmHelpMenuModule} from '@gds/prime-ng/help-menu';
import { GmNavbarModule} from '@gds/prime-ng/navigation-bar';
import { GmNotificationModule} from '@gds/prime-ng/notification';
import { GmSideBarModule} from '@gds/prime-ng/side-bar';
import { GmSideNavModule} from '@gds/prime-ng/side-navigation';
import { GmToolbarModule} from '@gds/prime-ng/toolbar';
import { GmUserMenuModule} from '@gds/prime-ng/user-menu';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {UserService} from './components/home/home.service';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule, ConfirmationService, ConfirmDialogModule, MessageService, TableModule} from 'primeng';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';



import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import {GmButtonModule} from '@gds/prime-ng';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {authReducer, AuthState} from './state/login/login.reducer';
import {AuthEffects} from './state/login/login.effects';
import {selectLoggedIn} from './state/login/login.selector';
import {PartEffects} from './state/addPart/addPart.effects';
import {addPartReducer} from './state/addPart/addPart.reducer';
import {partsReducer} from './state/update/update.reducer';
import {UpdateEffects} from './state/update/update.effects';
import {deleteReducer} from './state/delete/delete.reducers';
import {DeleteEffects} from './state/delete/delete.effects';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MastComponent,
    LoginRegisterComponent,
  ],
  imports: [
    RadioButtonModule,
    RatingModule,
    ToolbarModule,
    FileUploadModule,
    ProgressBarModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    RouterModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    // PrimeNG
    // GM GDS
    GmApplicationTitleModule,
    GmApplicationFooterModule,
    GmToolbarModule,
    GmNavbarModule,

    GmBreadcrumbModule,
    GmApplicationSearchModule,
    GmHelpMenuModule,
    GmNotificationModule,
    GmUserMenuModule,
    GmSideBarModule,
    GmSideNavModule,
    GmEntityModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    GmButtonModule,
    StoreModule.forRoot({auth: authReducer, 'parts': addPartReducer, update: partsReducer, delete: deleteReducer}),
    EffectsModule.forRoot([AuthEffects, PartEffects, UpdateEffects, DeleteEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [UserService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
