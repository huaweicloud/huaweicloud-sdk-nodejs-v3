

export class FlinkJarParameter {
    private 'main_class'?: string;
    private 'main_args'?: string;
    private 'main_jar'?: string;
    private 'dependency_jars'?: Array<string>;
    private 'dependency_files'?: Array<string>;
    public constructor() { 
    }
    public withMainClass(mainClass: string): FlinkJarParameter {
        this['main_class'] = mainClass;
        return this;
    }
    public set mainClass(mainClass: string  | undefined) {
        this['main_class'] = mainClass;
    }
    public get mainClass(): string | undefined {
        return this['main_class'];
    }
    public withMainArgs(mainArgs: string): FlinkJarParameter {
        this['main_args'] = mainArgs;
        return this;
    }
    public set mainArgs(mainArgs: string  | undefined) {
        this['main_args'] = mainArgs;
    }
    public get mainArgs(): string | undefined {
        return this['main_args'];
    }
    public withMainJar(mainJar: string): FlinkJarParameter {
        this['main_jar'] = mainJar;
        return this;
    }
    public set mainJar(mainJar: string  | undefined) {
        this['main_jar'] = mainJar;
    }
    public get mainJar(): string | undefined {
        return this['main_jar'];
    }
    public withDependencyJars(dependencyJars: Array<string>): FlinkJarParameter {
        this['dependency_jars'] = dependencyJars;
        return this;
    }
    public set dependencyJars(dependencyJars: Array<string>  | undefined) {
        this['dependency_jars'] = dependencyJars;
    }
    public get dependencyJars(): Array<string> | undefined {
        return this['dependency_jars'];
    }
    public withDependencyFiles(dependencyFiles: Array<string>): FlinkJarParameter {
        this['dependency_files'] = dependencyFiles;
        return this;
    }
    public set dependencyFiles(dependencyFiles: Array<string>  | undefined) {
        this['dependency_files'] = dependencyFiles;
    }
    public get dependencyFiles(): Array<string> | undefined {
        return this['dependency_files'];
    }
}