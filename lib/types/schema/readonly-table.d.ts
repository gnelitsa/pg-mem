import { _ITable, _ISelection, _ISchema, _Transaction, _IIndex, IValue, _Column, SchemaField, IndexDef, _Explainer, _SelectExplanation, ChangeHandler, Stats, DropHandler, IndexHandler, Reg, _IConstraint, TruncateHandler } from "../interfaces-private";
import { CreateColumnDef, ExprRef, TableConstraint } from "pgsql-ast-parser";
import { DataSourceBase } from "../transforms/transform-base";
import { Schema, nil, ISubscription } from "../interfaces";
export declare abstract class ReadOnlyTable<T = any> extends DataSourceBase<T> implements _ITable, _ISelection {
    private schema;
    get isExecutionWithNoResult(): boolean;
    abstract entropy(t: _Transaction): number;
    abstract enumerate(t: _Transaction): Iterable<T>;
    abstract hasItem(value: T, t: _Transaction): boolean;
    abstract readonly _schema: Schema;
    reg: Reg;
    readonly selection: _ISelection;
    readonly hidden = true;
    isOriginOf(v: IValue): boolean;
    get type(): "table";
    constructor(schema: _ISchema);
    get name(): string;
    register(): void;
    private columnsById;
    private _columns?;
    private build;
    get columns(): ReadonlyArray<IValue<any>>;
    getColumn(column: string | ExprRef): IValue;
    getColumn(column: string | ExprRef, nullIfNotFound?: boolean): IValue | nil;
    explain(e: _Explainer): _SelectExplanation;
    listIndices(): IndexDef[];
    stats(t: _Transaction): Stats | null;
    rename(to: string): this;
    update(t: _Transaction, toUpdate: any): void;
    addColumn(column: SchemaField | CreateColumnDef): _Column;
    getColumnRef(column: string, nullIfNotFound?: boolean): _Column;
    getConstraint(constraint: string): _IConstraint | nil;
    addConstraint(constraint: TableConstraint, t: _Transaction): _IConstraint;
    insert(item: any): void;
    doInsert(toInsert: any): void;
    delete(t: _Transaction, toDelete: T): void;
    truncate(t: _Transaction): void;
    createIndex(): _IConstraint;
    dropIndex(t: _Transaction, name: string): void;
    setHidden(): this;
    drop(t: _Transaction): void;
    setReadonly(): this;
    getIndex(...forValue: IValue[]): _IIndex<any> | nil;
    on(): any;
    onBeforeChange(columns: string[], check: ChangeHandler<T>): {
        unsubscribe(): void;
    };
    onCheckChange(columns: string[], check: ChangeHandler<T>): {
        unsubscribe(): void;
    };
    onTruncate(sub: TruncateHandler): ISubscription;
    onDrop(sub: DropHandler): ISubscription;
    onIndex(sub: IndexHandler): ISubscription;
    find(template?: Partial<T>, columns?: (keyof T)[]): Iterable<T>;
    make(table: _ITable, i: number, t: IValue<any>): any;
    itemsByTable(table: string | _ITable, t: _Transaction): IterableIterator<any>;
}
//# sourceMappingURL=readonly-table.d.ts.map