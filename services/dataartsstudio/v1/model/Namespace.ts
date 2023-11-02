

export class Namespace {
    private 'namespace_name'?: string;
    private 'namespace_guid'?: string;
    private 'namespace_qualified_name'?: string;
    private 'table_count'?: number;
    public constructor() { 
    }
    public withNamespaceName(namespaceName: string): Namespace {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withNamespaceGuid(namespaceGuid: string): Namespace {
        this['namespace_guid'] = namespaceGuid;
        return this;
    }
    public set namespaceGuid(namespaceGuid: string  | undefined) {
        this['namespace_guid'] = namespaceGuid;
    }
    public get namespaceGuid(): string | undefined {
        return this['namespace_guid'];
    }
    public withNamespaceQualifiedName(namespaceQualifiedName: string): Namespace {
        this['namespace_qualified_name'] = namespaceQualifiedName;
        return this;
    }
    public set namespaceQualifiedName(namespaceQualifiedName: string  | undefined) {
        this['namespace_qualified_name'] = namespaceQualifiedName;
    }
    public get namespaceQualifiedName(): string | undefined {
        return this['namespace_qualified_name'];
    }
    public withTableCount(tableCount: number): Namespace {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: number  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): number | undefined {
        return this['table_count'];
    }
}