import { mergeApplicationConfig, ApplicationConfig, InjectionToken } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { REQUEST, RESPONSE_INIT } from '@angular/ssr/tokens';
import { TOKEN_IN_SSR } from '../token';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    {
      provide: TOKEN_IN_SSR,
      useFactory: (req: Request, res: ResponseInit) => {
        return req.headers.get('host');
      },
      deps: [REQUEST, RESPONSE_INIT]
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
