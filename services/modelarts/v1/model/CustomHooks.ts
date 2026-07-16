import { ContainerHooks } from './ContainerHooks';


export class CustomHooks {
    private 'container_hooks'?: ContainerHooks;
    public constructor() { 
    }
    public withContainerHooks(containerHooks: ContainerHooks): CustomHooks {
        this['container_hooks'] = containerHooks;
        return this;
    }
    public set containerHooks(containerHooks: ContainerHooks  | undefined) {
        this['container_hooks'] = containerHooks;
    }
    public get containerHooks(): ContainerHooks | undefined {
        return this['container_hooks'];
    }
}