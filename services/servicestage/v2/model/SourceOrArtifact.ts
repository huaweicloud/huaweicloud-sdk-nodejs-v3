import { ObsProperties } from './ObsProperties';
import { SourceRepoType } from './SourceRepoType';


export class SourceOrArtifact {
    public storage?: SourceOrArtifactStorageEnum | string;
    public type?: SourceOrArtifactTypeEnum | string;
    public url?: string;
    public webUrl?: string;
    public auth?: string;
    public properties?: ObsProperties;
    private 'repo_type'?: SourceRepoType;
    private 'repo_url'?: string;
    private 'repo_ref'?: string;
    private 'repo_auth'?: string;
    public constructor() { 
    }
    public withStorage(storage: SourceOrArtifactStorageEnum | string): SourceOrArtifact {
        this['storage'] = storage;
        return this;
    }
    public withType(type: SourceOrArtifactTypeEnum | string): SourceOrArtifact {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): SourceOrArtifact {
        this['url'] = url;
        return this;
    }
    public withWebUrl(webUrl: string): SourceOrArtifact {
        this['webUrl'] = webUrl;
        return this;
    }
    public withAuth(auth: string): SourceOrArtifact {
        this['auth'] = auth;
        return this;
    }
    public withProperties(properties: ObsProperties): SourceOrArtifact {
        this['properties'] = properties;
        return this;
    }
    public withRepoType(repoType: SourceRepoType): SourceOrArtifact {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: SourceRepoType  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): SourceRepoType | undefined {
        return this['repo_type'];
    }
    public withRepoUrl(repoUrl: string): SourceOrArtifact {
        this['repo_url'] = repoUrl;
        return this;
    }
    public set repoUrl(repoUrl: string  | undefined) {
        this['repo_url'] = repoUrl;
    }
    public get repoUrl(): string | undefined {
        return this['repo_url'];
    }
    public withRepoRef(repoRef: string): SourceOrArtifact {
        this['repo_ref'] = repoRef;
        return this;
    }
    public set repoRef(repoRef: string  | undefined) {
        this['repo_ref'] = repoRef;
    }
    public get repoRef(): string | undefined {
        return this['repo_ref'];
    }
    public withRepoAuth(repoAuth: string): SourceOrArtifact {
        this['repo_auth'] = repoAuth;
        return this;
    }
    public set repoAuth(repoAuth: string  | undefined) {
        this['repo_auth'] = repoAuth;
    }
    public get repoAuth(): string | undefined {
        return this['repo_auth'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceOrArtifactStorageEnum {
    SWR = 'swr',
    OBS = 'obs'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceOrArtifactTypeEnum {
    PACKAGE = 'package'
}
