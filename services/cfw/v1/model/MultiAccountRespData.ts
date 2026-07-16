

export class MultiAccountRespData {
    public id?: string;
    public name?: string;
    private 'trust_service_status'?: number;
    public constructor() { 
    }
    public withId(id: string): MultiAccountRespData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MultiAccountRespData {
        this['name'] = name;
        return this;
    }
    public withTrustServiceStatus(trustServiceStatus: number): MultiAccountRespData {
        this['trust_service_status'] = trustServiceStatus;
        return this;
    }
    public set trustServiceStatus(trustServiceStatus: number  | undefined) {
        this['trust_service_status'] = trustServiceStatus;
    }
    public get trustServiceStatus(): number | undefined {
        return this['trust_service_status'];
    }
}