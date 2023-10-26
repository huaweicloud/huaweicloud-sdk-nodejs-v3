

export class Counter {
    private 'BYTES_WRITTEN'?: number;
    private 'TOTAL_FILES'?: number;
    private 'ROWS_READ'?: number;
    private 'BYTES_READ'?: number;
    private 'ROWS_WRITTEN'?: number;
    private 'FILES_WRITTEN'?: number;
    private 'FILES_READ'?: number;
    private 'TOTAL_SIZE'?: number;
    private 'FILES_SKIPPED'?: number;
    private 'ROWS_WRITTEN_SKIPPED'?: number;
    public constructor() { 
    }
    public withBytesWritten(bytesWritten: number): Counter {
        this['BYTES_WRITTEN'] = bytesWritten;
        return this;
    }
    public set bytesWritten(bytesWritten: number  | undefined) {
        this['BYTES_WRITTEN'] = bytesWritten;
    }
    public get bytesWritten(): number | undefined {
        return this['BYTES_WRITTEN'];
    }
    public withTotalFiles(totalFiles: number): Counter {
        this['TOTAL_FILES'] = totalFiles;
        return this;
    }
    public set totalFiles(totalFiles: number  | undefined) {
        this['TOTAL_FILES'] = totalFiles;
    }
    public get totalFiles(): number | undefined {
        return this['TOTAL_FILES'];
    }
    public withRowsRead(rowsRead: number): Counter {
        this['ROWS_READ'] = rowsRead;
        return this;
    }
    public set rowsRead(rowsRead: number  | undefined) {
        this['ROWS_READ'] = rowsRead;
    }
    public get rowsRead(): number | undefined {
        return this['ROWS_READ'];
    }
    public withBytesRead(bytesRead: number): Counter {
        this['BYTES_READ'] = bytesRead;
        return this;
    }
    public set bytesRead(bytesRead: number  | undefined) {
        this['BYTES_READ'] = bytesRead;
    }
    public get bytesRead(): number | undefined {
        return this['BYTES_READ'];
    }
    public withRowsWritten(rowsWritten: number): Counter {
        this['ROWS_WRITTEN'] = rowsWritten;
        return this;
    }
    public set rowsWritten(rowsWritten: number  | undefined) {
        this['ROWS_WRITTEN'] = rowsWritten;
    }
    public get rowsWritten(): number | undefined {
        return this['ROWS_WRITTEN'];
    }
    public withFilesWritten(filesWritten: number): Counter {
        this['FILES_WRITTEN'] = filesWritten;
        return this;
    }
    public set filesWritten(filesWritten: number  | undefined) {
        this['FILES_WRITTEN'] = filesWritten;
    }
    public get filesWritten(): number | undefined {
        return this['FILES_WRITTEN'];
    }
    public withFilesRead(filesRead: number): Counter {
        this['FILES_READ'] = filesRead;
        return this;
    }
    public set filesRead(filesRead: number  | undefined) {
        this['FILES_READ'] = filesRead;
    }
    public get filesRead(): number | undefined {
        return this['FILES_READ'];
    }
    public withTotalSize(totalSize: number): Counter {
        this['TOTAL_SIZE'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['TOTAL_SIZE'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['TOTAL_SIZE'];
    }
    public withFilesSkipped(filesSkipped: number): Counter {
        this['FILES_SKIPPED'] = filesSkipped;
        return this;
    }
    public set filesSkipped(filesSkipped: number  | undefined) {
        this['FILES_SKIPPED'] = filesSkipped;
    }
    public get filesSkipped(): number | undefined {
        return this['FILES_SKIPPED'];
    }
    public withRowsWrittenSkipped(rowsWrittenSkipped: number): Counter {
        this['ROWS_WRITTEN_SKIPPED'] = rowsWrittenSkipped;
        return this;
    }
    public set rowsWrittenSkipped(rowsWrittenSkipped: number  | undefined) {
        this['ROWS_WRITTEN_SKIPPED'] = rowsWrittenSkipped;
    }
    public get rowsWrittenSkipped(): number | undefined {
        return this['ROWS_WRITTEN_SKIPPED'];
    }
}