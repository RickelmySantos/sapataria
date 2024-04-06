import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
      <nav class="topbar">
            <div></div>
            <ul class="topbar__ul">
                <li>Inicio</li>
                <li>Comprar</li>
                <li>Coleções</li>
                <li>Customize</li>
            </ul>
            <div class="icon ">
                <img class="icon__icons" src="/assets/images/search.svg" alt="Icone de busca">
            <div>
                <img class="icon__icons" src="/assets/images/carrinho.svg" alt="Icone carrinho de compras">
            </div>
            </div>
            
        </nav>`,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: []
})

export class SidebarComponent {
}