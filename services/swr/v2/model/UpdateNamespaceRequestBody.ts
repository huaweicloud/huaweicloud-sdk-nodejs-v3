import { NamespaceMetadata } from './NamespaceMetadata';


export class UpdateNamespaceRequestBody {
    public metadata?: NamespaceMetadata;
    public constructor(metadata?: NamespaceMetadata) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: NamespaceMetadata): UpdateNamespaceRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}