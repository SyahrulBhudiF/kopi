import { createSignal } from "solid-js";
import SearchIcon from "~icons/tabler/search";

export function SearchBar() {
	const [search, setSearch] = createSignal("");

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === "Enter") {
			window.location.search = `?search=${search()}`;
		}
	}

	return (
		<div class="mx-auto w-full max-w-2xl">
			<label class="bg-rose-pine-surface px-3 py-3 flex items-center gap-2 focus-within:ring-2 focus-within:ring-rose-pine-iris">
				<span class="h-5 w-5">
					<SearchIcon />
				</span>
				<input
					type="search"
					placeholder="Search for a recipe or bean..."
					class="w-full bg-transparent outline-none text-sm placeholder:text-rose-pine-muted"
					value={search()}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={onKeyDown}
				/>
			</label>
		</div>
	);
}
