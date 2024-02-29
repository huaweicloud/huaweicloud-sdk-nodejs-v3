

export class ServiceSetDetailResponseDto {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'service_set_type'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): ServiceSetDetailResponseDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServiceSetDetailResponseDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ServiceSetDetailResponseDto {
        this['description'] = description;
        return this;
    }
    public withServiceSetType(serviceSetType: number): ServiceSetDetailResponseDto {
        this['service_set_type'] = serviceSetType;
        return this;
    }
    public set serviceSetType(serviceSetType: number  | undefined) {
        this['service_set_type'] = serviceSetType;
    }
    public get serviceSetType(): number | undefined {
        return this['service_set_type'];
    }
}