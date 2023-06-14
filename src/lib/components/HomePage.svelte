<script lang="ts">
	import { infoCards } from '../../stores/mercaderias';
</script>

<!-- cuerpo de carta -->
<section>
	<!-- contendedor de las cartas -->
	<div class="grid grid-cols-auto-140 lg:grid-cols-auto-240 gap-6 place-content-center">
		{#each infoCards as informacion}
			<!-- empieza la card -->
			<div class="lg:w-60 w-[140px]">
				<img
					class="w-[140px] h-[140px] lg:w-60 lg:h-60 object-cover rounded-[20px]"
					src={informacion.img}
					alt={informacion.description}
				/>
				<!-- card informacion -->
				<div class="flex justify-between items-center mt-3">
					<div>
						<p class="font-bold text-regular mt-0 mb-1">{informacion.price}</p>
						<p class="text-compact mt-0 mb-0 text-global-veryLigthPink">
							{informacion.description}
						</p>
					</div>
					<figure class="m-0">
						<img class="w-9 h-9" src="/icons/bt_add_to_cart.svg" alt="icono" />
					</figure>
				</div>
			</div>
		{/each}
	</div>
</section>
