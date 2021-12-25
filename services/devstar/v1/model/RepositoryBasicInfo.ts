

export class RepositoryBasicInfo {
    public uuid?: string;
    public id?: string;
    public name?: string;
    private 'https_url'?: string | undefined;
    private 'ssh_url'?: string | undefined;
    private 'web_url'?: string | undefined;
    public constructor() { 
    }
    public withUuid(uuid: string): RepositoryBasicInfo {
        this['uuid'] = uuid;
        return this;
    }
    public withId(id: string): RepositoryBasicInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryBasicInfo {
        this['name'] = name;
        return this;
    }
    public withHttpsUrl(httpsUrl: string): RepositoryBasicInfo {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl() {
        return this['https_url'];
    }
    public withSshUrl(sshUrl: string): RepositoryBasicInfo {
        this['ssh_url'] = sshUrl;
        return this;
    }
    public set sshUrl(sshUrl: string | undefined) {
        this['ssh_url'] = sshUrl;
    }
    public get sshUrl() {
        return this['ssh_url'];
    }
    public withWebUrl(webUrl: string): RepositoryBasicInfo {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl() {
        return this['web_url'];
    }
}