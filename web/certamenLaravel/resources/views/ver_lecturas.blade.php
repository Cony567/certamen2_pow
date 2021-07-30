@extends('layouts.master')

@section('body')
    
    <div class="row mt-5">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-6 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <span>Filtro</span>
                    </div>
                    <div class="card-body">
                        <select class="form-select" id="filtro-select">
                            <option value="todos">Todos</option>
                            <option value="KiloWatts">KiloWatts</option>
                            <option value="Watts">Watts</option>
                            <option value="Temperatura">Temperatura</option>
                        </select>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-12 col-lg-6 mx-auto">
                <table class="table table-hover table-bordered table-striped table-responsive">
                    <thead class="bg-dark text-white">
                        <tr>
                            <td>Fecha</td>
                            <td>Hora</td>
                            <td>Medidor</td>
                            <td>Valor</td>
                            <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody class="tbody" id="tbody-lecturas"></tbody>
                </table>
            </div>
        </div>
    </div>
    
@endsection

@section('js')
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/ver_lecturas.js')}}"></script>
@endsection