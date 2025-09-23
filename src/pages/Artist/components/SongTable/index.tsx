import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Copy, ListPlus, MoreHorizontal, Music3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { MOCK_SONGS } from '@/pages/Artist/utils';
import type { Song } from '@/types/model/Song';
import AvatarGroup from '@/components/AvatarGroup';
import { formatNumber, formatTime } from '@/lib/format';

export const columns: ColumnDef<Pick<Song, 'id' | 'title' | 'artists' | 'duration' | 'like'>>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		size: 60,
	},
	{
		accessorKey: 'title',
		header: 'Title',
		cell: ({ row }) => <div className="truncate">{row.getValue('title')}</div>,
		size: 200,
	},
	{
		accessorKey: 'artists',
		header: 'Artists',
		cell: ({ row }) => {
			return <AvatarGroup max={3} avatars={row.getValue('artists')} avatarClassName="size-6" />;
		},
		size: 200,
	},
	{
		accessorKey: 'like',
		header: 'Like',
		cell: ({ row }) => {
			const like = row.getValue('like') as number;
			return formatNumber(like);
		},
		size: 150,
	},
	{
		accessorKey: 'duration',
		header: 'Duration',
		cell: ({ row }) => {
			const duration = row.getValue('duration') as number;
			return formatTime(duration);
		},
		size: 150,
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: () => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="size-6">
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onSelect={() => console.log('hello')}>
							<div className="flex items-center gap-2">
								<ListPlus />
								<span>Add to queue</span>
							</div>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<div className="flex items-center gap-2">
								<Copy />
								<span>Copy link</span>
							</div>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<div className="flex items-center gap-2">
								<Music3 />
								<span>Go to song</span>
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
		size: 60,
	},
];
const SongTable = () => {
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data: MOCK_SONGS,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			rowSelection,
		},
	});

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>
						{flexRender(
							table.getHeaderGroups()[0].headers[0].column.columnDef.header,
							table.getHeaderGroups()[0].headers[0].getContext(),
						)}
					</TableHead>

					{table.getSelectedRowModel().rows.length > 0 ? (
						<TableHead colSpan={columns.length - 1}>
							<div className="flex items-center gap-4">
								{table.getSelectedRowModel().rows.length} selected
								<Button variant="outline" size="sm">
									<ListPlus /> Add to Queue
								</Button>
							</div>
						</TableHead>
					) : (
						table.getHeaderGroups()[0].headers.map((header, index) => {
							return (
								index > 0 && (
									<TableHead key={header.id}>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								)
							);
						})
					)}
				</TableRow>
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map((row) => (
						<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
							{row.getVisibleCells().map((cell) => (
								<TableCell style={{ width: cell.column.getSize() }} key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className="h-24 text-center">
							No results.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default SongTable;
