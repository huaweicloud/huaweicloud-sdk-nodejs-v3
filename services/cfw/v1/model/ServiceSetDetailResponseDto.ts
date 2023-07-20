

export class ServiceSetDetailResponseDto {
    public id?: string;
    public name?: string;
    public description?: string;
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
}