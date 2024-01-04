import { HttpDetectRequestBodyExtension } from './HttpDetectRequestBodyExtension';


export class HttpDetectRequestBody {
    public protocol?: HttpDetectRequestBodyProtocolEnum | string;
    public endpoint?: string;
    public extension?: HttpDetectRequestBodyExtension;
    public constructor(protocol?: string, endpoint?: string) { 
        this['protocol'] = protocol;
        this['endpoint'] = endpoint;
    }
    public withProtocol(protocol: HttpDetectRequestBodyProtocolEnum | string): HttpDetectRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): HttpDetectRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
    public withExtension(extension: HttpDetectRequestBodyExtension): HttpDetectRequestBody {
        this['extension'] = extension;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HttpDetectRequestBodyProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https;'
}
