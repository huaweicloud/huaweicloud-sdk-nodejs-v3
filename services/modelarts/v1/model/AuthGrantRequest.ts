

export class AuthGrantRequest {
    private 'is_reset'?: boolean;
    public constructor() { 
    }
    public withIsReset(isReset: boolean): AuthGrantRequest {
        this['is_reset'] = isReset;
        return this;
    }
    public set isReset(isReset: boolean  | undefined) {
        this['is_reset'] = isReset;
    }
    public get isReset(): boolean | undefined {
        return this['is_reset'];
    }
}