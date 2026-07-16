

export class Tensorboard {
    public url?: string;
    public token?: string;
    public constructor() { 
    }
    public withUrl(url: string): Tensorboard {
        this['url'] = url;
        return this;
    }
    public withToken(token: string): Tensorboard {
        this['token'] = token;
        return this;
    }
}