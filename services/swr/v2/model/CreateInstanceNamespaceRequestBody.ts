import { NamespaceMetadata } from './NamespaceMetadata';


export class CreateInstanceNamespaceRequestBody {
    private 'namespace_name'?: string;
    public metadata?: NamespaceMetadata;
    public constructor(namespaceName?: string, metadata?: NamespaceMetadata) { 
        this['namespace_name'] = namespaceName;
        this['metadata'] = metadata;
    }
    public withNamespaceName(namespaceName: string): CreateInstanceNamespaceRequestBody {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withMetadata(metadata: NamespaceMetadata): CreateInstanceNamespaceRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}