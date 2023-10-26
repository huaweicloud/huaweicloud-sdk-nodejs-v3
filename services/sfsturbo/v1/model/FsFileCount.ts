

export class FsFileCount {
    public dir?: number;
    public regular?: number;
    public pipe?: number;
    private 'char'?: number;
    public block?: number;
    public socket?: number;
    public symlink?: number;
    public constructor(dir?: number, regular?: number, pipe?: number, _char?: number, block?: number, socket?: number, symlink?: number) { 
        this['dir'] = dir;
        this['regular'] = regular;
        this['pipe'] = pipe;
        this['char'] = _char;
        this['block'] = block;
        this['socket'] = socket;
        this['symlink'] = symlink;
    }
    public withDir(dir: number): FsFileCount {
        this['dir'] = dir;
        return this;
    }
    public withRegular(regular: number): FsFileCount {
        this['regular'] = regular;
        return this;
    }
    public withPipe(pipe: number): FsFileCount {
        this['pipe'] = pipe;
        return this;
    }
    public withChar(_char: number): FsFileCount {
        this['char'] = _char;
        return this;
    }
    public set _char(_char: number  | undefined) {
        this['char'] = _char;
    }
    public get _char(): number | undefined {
        return this['char'];
    }
    public withBlock(block: number): FsFileCount {
        this['block'] = block;
        return this;
    }
    public withSocket(socket: number): FsFileCount {
        this['socket'] = socket;
        return this;
    }
    public withSymlink(symlink: number): FsFileCount {
        this['symlink'] = symlink;
        return this;
    }
}