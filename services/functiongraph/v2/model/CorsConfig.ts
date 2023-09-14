

export class CorsConfig {
    private 'is_cors'?: boolean;
    public constructor() { 
    }
    public withIsCors(isCors: boolean): CorsConfig {
        this['is_cors'] = isCors;
        return this;
    }
    public set isCors(isCors: boolean  | undefined) {
        this['is_cors'] = isCors;
    }
    public get isCors(): boolean | undefined {
        return this['is_cors'];
    }
}