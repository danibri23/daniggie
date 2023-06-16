<script lang="ts">
	import { pedidosCards } from '../../stores/pedidos';
</script>

<aside class="w-[360px] h-screen box-border right-0 absolute mr-3">
	<!-- contenedor principal -->
	<div class="ml-4">
		<!-- div cart -->
		{#each pedidosCards as informacion}
			<div class="flex justify-between items-center m-3">
				<div class="flex justify-center items-center">
					<img
						class="object-cover w-[70px] h-[70px] rounded-[20px]"
						src={informacion.img}
						alt={informacion.description}
					/>
					<p class="p-5 text-global-veryLigthPink font-light">{informacion.description}</p>
				</div>
				<div class="flex items-center">
					<p>{informacion.price}</p>
					<img class="ml-4" src="./icons/icon_close.png" alt="close" />
				</div>
			</div>
		{/each}

		<!-- div monto total -->
		<div
			class="flex flex-row justify-between items-center bg-global-textInputField w-full h-16 font-bold p-5 rounded-md mb-5"
		>
			<p class="">Total</p>
			<p>$ 670</p>
		</div>
		<!-- button principal -->
		<button
			class="bg-global-hospitalGreen text-white font-bold w-full h-12 text-regular rounded-lg cursor-pointer border-none flex justify-center items-center"
			>Verificar
		</button>
	</div>
</aside>
