import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);
    registerLocaleData(localeTr);

export default bootstrap;
