

export class BackendRequestPara {
    public name?: string;
    public position?: BackendRequestParaPositionEnum | string;
    private 'backend_para_name'?: string;
    public constructor() { 
    }
    public withName(name: string): BackendRequestPara {
        this['name'] = name;
        return this;
    }
    public withPosition(position: BackendRequestParaPositionEnum | string): BackendRequestPara {
        this['position'] = position;
        return this;
    }
    public withBackendParaName(backendParaName: string): BackendRequestPara {
        this['backend_para_name'] = backendParaName;
        return this;
    }
    public set backendParaName(backendParaName: string  | undefined) {
        this['backend_para_name'] = backendParaName;
    }
    public get backendParaName(): string | undefined {
        return this['backend_para_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendRequestParaPositionEnum {
    REQUEST_PARAMETER_POSITION_PATH = 'REQUEST_PARAMETER_POSITION_PATH',
    REQUEST_PARAMETER_POSITION_HEADER = 'REQUEST_PARAMETER_POSITION_HEADER',
    REQUEST_PARAMETER_POSITION_QUERY = 'REQUEST_PARAMETER_POSITION_QUERY'
}
