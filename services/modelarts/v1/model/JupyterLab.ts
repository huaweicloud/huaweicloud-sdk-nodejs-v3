

export class JupyterLab {
    public url?: string;
    public token?: string;
    public constructor() { 
    }
    public withUrl(url: string): JupyterLab {
        this['url'] = url;
        return this;
    }
    public withToken(token: string): JupyterLab {
        this['token'] = token;
        return this;
    }
}