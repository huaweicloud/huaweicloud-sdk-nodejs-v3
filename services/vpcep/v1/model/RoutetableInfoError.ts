import { RoutetableInfoErrorDetial } from './RoutetableInfoErrorDetial';


export class RoutetableInfoError {
    private 'bind_failed'?: Array<RoutetableInfoErrorDetial>;
    private 'unbind_failed'?: Array<RoutetableInfoErrorDetial>;
    public constructor() { 
    }
    public withBindFailed(bindFailed: Array<RoutetableInfoErrorDetial>): RoutetableInfoError {
        this['bind_failed'] = bindFailed;
        return this;
    }
    public set bindFailed(bindFailed: Array<RoutetableInfoErrorDetial>  | undefined) {
        this['bind_failed'] = bindFailed;
    }
    public get bindFailed(): Array<RoutetableInfoErrorDetial> | undefined {
        return this['bind_failed'];
    }
    public withUnbindFailed(unbindFailed: Array<RoutetableInfoErrorDetial>): RoutetableInfoError {
        this['unbind_failed'] = unbindFailed;
        return this;
    }
    public set unbindFailed(unbindFailed: Array<RoutetableInfoErrorDetial>  | undefined) {
        this['unbind_failed'] = unbindFailed;
    }
    public get unbindFailed(): Array<RoutetableInfoErrorDetial> | undefined {
        return this['unbind_failed'];
    }
}