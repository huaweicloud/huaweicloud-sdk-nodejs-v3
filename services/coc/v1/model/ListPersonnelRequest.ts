

export class ListPersonnelRequest {
    private 'has_mobile'?: boolean;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withHasMobile(hasMobile: boolean): ListPersonnelRequest {
        this['has_mobile'] = hasMobile;
        return this;
    }
    public set hasMobile(hasMobile: boolean  | undefined) {
        this['has_mobile'] = hasMobile;
    }
    public get hasMobile(): boolean | undefined {
        return this['has_mobile'];
    }
    public withName(name: string): ListPersonnelRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListPersonnelRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPersonnelRequest {
        this['limit'] = limit;
        return this;
    }
}