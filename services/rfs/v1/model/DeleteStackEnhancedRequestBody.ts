import { RetainAllResourcesTypeHolder } from './RetainAllResourcesTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';


export class DeleteStackEnhancedRequestBody {
    private 'stack_id'?: string;
    private 'retain_all_resources'?: boolean;
    public constructor() { 
    }
    public withStackId(stackId: string): DeleteStackEnhancedRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withRetainAllResources(retainAllResources: boolean): DeleteStackEnhancedRequestBody {
        this['retain_all_resources'] = retainAllResources;
        return this;
    }
    public set retainAllResources(retainAllResources: boolean  | undefined) {
        this['retain_all_resources'] = retainAllResources;
    }
    public get retainAllResources(): boolean | undefined {
        return this['retain_all_resources'];
    }
}