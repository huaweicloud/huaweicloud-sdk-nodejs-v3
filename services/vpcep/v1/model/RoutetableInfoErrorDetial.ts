

export class RoutetableInfoErrorDetial {
    public id?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withId(id: string): RoutetableInfoErrorDetial {
        this['id'] = id;
        return this;
    }
    public withErrorMessage(errorMessage: string): RoutetableInfoErrorDetial {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}