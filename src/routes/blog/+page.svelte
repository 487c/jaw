<script lang="ts">
	import type { BlogPostMeta } from '$lib/utils/BlogPostMeta';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Toggle } from '$lib/components/ui/toggle/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	export let data: { tags: string[]; posts: BlogPostMeta[] };
	let selTags = data.tags.reduce((obj: { [key: string]: boolean }, tag: string) => {
		obj[tag] = false;
		return obj;
	}, {});

	let posts = data.posts;

	/**
	 * Filters all posts depending on selected tags.
	 */
	function filterPosts() {
		posts = data.posts.filter(function (post: BlogPostMeta) {
			return post.tags.some(function (tag: string) {
				return selTags[tag];
			});
		});
	}

	/**
	 * Toggles all selected tags.
	 * Deselects if some are selected, else toggles.
	 */
	function toggleSelected() {
		const keys = Object.keys(selTags);
		const deselect = keys.some((key) => selTags[key]);
		keys.forEach((key) => (selTags[key] = !deselect));
	}
</script>

<div class="w-full">
	<div class="flex">
		<div class="flex grow">
			Posts: {data.posts.length}
		</div>
		<div class="mr-20">
			<Dialog.Root>
				<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Filter</Dialog.Trigger>
				<Dialog.Content class="sm:max-w-[425px]">
					<Dialog.Header>
						<Dialog.Title>Filter by tags</Dialog.Title>
						<Dialog.Description>Select the tags for filtering the blog posts.</Dialog.Description>
					</Dialog.Header>
					<div>
						{#each Object.keys(selTags) as tag}
							<Toggle variant="outline" class="mr-3" bind:pressed={selTags[tag]}>{tag}</Toggle>
						{/each}
					</div>
					<Dialog.Footer>
						<Button variant="outline" onclick={toggleSelected}>Toggle all</Button>
						<Dialog.Close>
							<Button variant="outline" type="submit" onclick={filterPosts}>Apply</Button>
						</Dialog.Close>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</div>
	{#each posts as post}
		<div class="mt-5 flex">
			<div class="content-center">{post.date}</div>
			<div class="ml-5 grow">
				<a class="text-xl text-sky-500 hover:underline" href={post.path}>
					{post.title}
				</a>
			</div>
		</div>
		<div class="mt-1">
			{#each post.tags as tag}
				<Badge class="mr-2" variant="outline">{tag}</Badge>
			{/each}
		</div>
	{/each}
</div>
