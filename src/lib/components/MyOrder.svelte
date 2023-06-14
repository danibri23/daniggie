<script lang="ts">
	import { pedidosCards } from '../../stores/pedidos';
</script>

<!-- cuerpo -->
<div class="w-full h-screen grid place-items-center">
	<!-- contenedor de la tienda -->
	<div class="grid w-[300px] grid-template-rows-auto">
		<h1 class="text-bold mb-10">Mi orden</h1>

		<!-- contenedor de mis pedidos -->
		<div class="flex flex-col">
			<!-- orden total -->
			<div
				class="grid grid-one-orden gap-4 items-center bg-global-textInputField rounded-lg mb-6 p-0 px-6"
			>
				<p class="flex flex-col">
					<span class="text-regular font-bold">14.06.23</span>
					<span class="text-compact text-global-veryLigthPink">6 articles</span>
				</p>
				<p class="text-end font-bold">$560.00</p>
			</div>

			<!-- pedidos -->
			{#each pedidosCards as informacion}
				<div class="grid grid-two-pedidos gap-4 mb-6 items-center">
					<figure class="m-0">
						<img
							class="w-[70px] h-[70px] rounded-[20px] object-cover"
							src={informacion.img}
							alt={informacion.description}
						/>
					</figure>
					<p class="text-global-veryLigthPink">{informacion.description}</p>
					<p class="text-regular font-bold">{informacion.price}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
