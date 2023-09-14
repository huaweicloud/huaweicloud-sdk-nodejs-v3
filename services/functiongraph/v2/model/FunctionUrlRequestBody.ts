import { CorsConfig } from './CorsConfig';


export class FunctionUrlRequestBody {
    private 'auth_type'?: string;
    public cors?: CorsConfig;
    public constructor(authType?: string, cors?: CorsConfig) { 
        this['auth_type'] = authType;
        this['cors'] = cors;
    }
    public withAuthType(authType: string): FunctionUrlRequestBody {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withCors(cors: CorsConfig): FunctionUrlRequestBody {
        this['cors'] = cors;
        return this;
    }
}