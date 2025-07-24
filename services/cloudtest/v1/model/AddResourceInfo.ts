import { SimpleResourceInfo } from './SimpleResourceInfo';


export class AddResourceInfo {
    private 'project_uuid'?: string;
    private 'iterator_uri'?: string;
    public type?: number;
    private 'is_all_issues'?: string;
    private 'all_import'?: boolean;
    private 'feature_uri'?: string;
    private 'simple_resourceinfo_list'?: Array<SimpleResourceInfo>;
    private 'invert_simple_resourceinfo_list'?: Array<SimpleResourceInfo>;
    private 'add_to_iterator'?: boolean;
    public constructor() { 
    }
    public withProjectUuid(projectUuid: string): AddResourceInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withIteratorUri(iteratorUri: string): AddResourceInfo {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withType(type: number): AddResourceInfo {
        this['type'] = type;
        return this;
    }
    public withIsAllIssues(isAllIssues: string): AddResourceInfo {
        this['is_all_issues'] = isAllIssues;
        return this;
    }
    public set isAllIssues(isAllIssues: string  | undefined) {
        this['is_all_issues'] = isAllIssues;
    }
    public get isAllIssues(): string | undefined {
        return this['is_all_issues'];
    }
    public withAllImport(allImport: boolean): AddResourceInfo {
        this['all_import'] = allImport;
        return this;
    }
    public set allImport(allImport: boolean  | undefined) {
        this['all_import'] = allImport;
    }
    public get allImport(): boolean | undefined {
        return this['all_import'];
    }
    public withFeatureUri(featureUri: string): AddResourceInfo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withSimpleResourceinfoList(simpleResourceinfoList: Array<SimpleResourceInfo>): AddResourceInfo {
        this['simple_resourceinfo_list'] = simpleResourceinfoList;
        return this;
    }
    public set simpleResourceinfoList(simpleResourceinfoList: Array<SimpleResourceInfo>  | undefined) {
        this['simple_resourceinfo_list'] = simpleResourceinfoList;
    }
    public get simpleResourceinfoList(): Array<SimpleResourceInfo> | undefined {
        return this['simple_resourceinfo_list'];
    }
    public withInvertSimpleResourceinfoList(invertSimpleResourceinfoList: Array<SimpleResourceInfo>): AddResourceInfo {
        this['invert_simple_resourceinfo_list'] = invertSimpleResourceinfoList;
        return this;
    }
    public set invertSimpleResourceinfoList(invertSimpleResourceinfoList: Array<SimpleResourceInfo>  | undefined) {
        this['invert_simple_resourceinfo_list'] = invertSimpleResourceinfoList;
    }
    public get invertSimpleResourceinfoList(): Array<SimpleResourceInfo> | undefined {
        return this['invert_simple_resourceinfo_list'];
    }
    public withAddToIterator(addToIterator: boolean): AddResourceInfo {
        this['add_to_iterator'] = addToIterator;
        return this;
    }
    public set addToIterator(addToIterator: boolean  | undefined) {
        this['add_to_iterator'] = addToIterator;
    }
    public get addToIterator(): boolean | undefined {
        return this['add_to_iterator'];
    }
}