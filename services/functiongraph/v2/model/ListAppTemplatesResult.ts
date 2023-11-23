

export class ListAppTemplatesResult {
    public id?: string;
    public name?: string;
    public runtime?: string;
    public category?: string;
    public description?: string;
    public image?: string;
    public constructor() { 
    }
    public withId(id: string): ListAppTemplatesResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAppTemplatesResult {
        this['name'] = name;
        return this;
    }
    public withRuntime(runtime: string): ListAppTemplatesResult {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: string): ListAppTemplatesResult {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ListAppTemplatesResult {
        this['description'] = description;
        return this;
    }
    public withImage(image: string): ListAppTemplatesResult {
        this['image'] = image;
        return this;
    }
}