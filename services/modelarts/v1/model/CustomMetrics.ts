import { Exec } from './Exec';
import { HttpGet } from './HttpGet';


export class CustomMetrics {
    public exec?: Exec;
    private 'http_get'?: HttpGet;
    public constructor() { 
    }
    public withExec(exec: Exec): CustomMetrics {
        this['exec'] = exec;
        return this;
    }
    public withHttpGet(httpGet: HttpGet): CustomMetrics {
        this['http_get'] = httpGet;
        return this;
    }
    public set httpGet(httpGet: HttpGet  | undefined) {
        this['http_get'] = httpGet;
    }
    public get httpGet(): HttpGet | undefined {
        return this['http_get'];
    }
}