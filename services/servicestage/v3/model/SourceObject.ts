import { SourceKind } from './SourceKind';


export class SourceObject {
    public kind?: SourceKind;
    public url?: string;
    public version?: string;
    public storage?: SourceObjectStorageEnum | string;
    public auth?: string;
    private 'repo_auth'?: string;
    private 'repo_namespace'?: string;
    private 'repo_ref'?: string;
    private 'repo_type'?: string;
    private 'web_url'?: string;
    private 'repo_url'?: string;
    public constructor(kind?: SourceKind) { 
        this['kind'] = kind;
    }
    public withKind(kind: SourceKind): SourceObject {
        this['kind'] = kind;
        return this;
    }
    public withUrl(url: string): SourceObject {
        this['url'] = url;
        return this;
    }
    public withVersion(version: string): SourceObject {
        this['version'] = version;
        return this;
    }
    public withStorage(storage: SourceObjectStorageEnum | string): SourceObject {
        this['storage'] = storage;
        return this;
    }
    public withAuth(auth: string): SourceObject {
        this['auth'] = auth;
        return this;
    }
    public withRepoAuth(repoAuth: string): SourceObject {
        this['repo_auth'] = repoAuth;
        return this;
    }
    public set repoAuth(repoAuth: string  | undefined) {
        this['repo_auth'] = repoAuth;
    }
    public get repoAuth(): string | undefined {
        return this['repo_auth'];
    }
    public withRepoNamespace(repoNamespace: string): SourceObject {
        this['repo_namespace'] = repoNamespace;
        return this;
    }
    public set repoNamespace(repoNamespace: string  | undefined) {
        this['repo_namespace'] = repoNamespace;
    }
    public get repoNamespace(): string | undefined {
        return this['repo_namespace'];
    }
    public withRepoRef(repoRef: string): SourceObject {
        this['repo_ref'] = repoRef;
        return this;
    }
    public set repoRef(repoRef: string  | undefined) {
        this['repo_ref'] = repoRef;
    }
    public get repoRef(): string | undefined {
        return this['repo_ref'];
    }
    public withRepoType(repoType: string): SourceObject {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): string | undefined {
        return this['repo_type'];
    }
    public withWebUrl(webUrl: string): SourceObject {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withRepoUrl(repoUrl: string): SourceObject {
        this['repo_url'] = repoUrl;
        return this;
    }
    public set repoUrl(repoUrl: string  | undefined) {
        this['repo_url'] = repoUrl;
    }
    public get repoUrl(): string | undefined {
        return this['repo_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceObjectStorageEnum {
    OBS = 'obs',
    SWR = 'swr',
    DEVCLOUD = 'devcloud'
}
