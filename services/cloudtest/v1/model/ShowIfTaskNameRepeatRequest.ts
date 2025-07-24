

export class ShowIfTaskNameRepeatRequest {
    private 'service_id'?: string;
    public id?: string;
    public name?: string;
    public constructor(serviceId?: string, name?: string) { 
        this['service_id'] = serviceId;
        this['name'] = name;
    }
    public withServiceId(serviceId: string): ShowIfTaskNameRepeatRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withId(id: string): ShowIfTaskNameRepeatRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowIfTaskNameRepeatRequest {
        this['name'] = name;
        return this;
    }
}