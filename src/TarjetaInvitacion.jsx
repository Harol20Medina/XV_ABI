import React, { useState } from 'react';
import { X, Heart, MapPin, Calendar, Clock, Send, Crown, Sparkles, Users } from 'lucide-react';

const TarjetaInvitacion = ({ isOpen, onClose, onConfirm }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirmAndSend = () => {
    // Mostrar la pantalla de éxito
    setShowSuccess(true);
    
    // Mensaje personalizado para WhatsApp
    const mensajeWhatsApp = encodeURIComponent(
      `¡Hola! Quiero confirmar mi asistencia a los XV años de Abigail. 🎉\n\n` +
      `✅ Invitación válida para 2 personas\n\n` +
      `¡No me lo pierdo por nada! 💃🎉`
    );
    
    const whatsappNumber = "51934119126";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensajeWhatsApp}`;
    
    // Llamar a la función de confirmación
    if (onConfirm) onConfirm();
    
    // Abrir WhatsApp inmediatamente
    window.open(whatsappLink, '_blank');
  };

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-sm bg-gradient-to-br from-[#DCE4DE] to-[#C2D4C6] rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-slideUp"
        style={{
          backgroundImage: `url(flores.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay de fondo */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        
        {/* Contenido */}
        <div className="relative z-10 p-5">
          {/* Botón cerrar - SIEMPRE visible */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20"
          >
            <X size={16} className="text-[#4A6B55]" />
          </button>
          
          {/* Encabezado */}
          <div className="text-center mb-5">
            <Crown className="w-10 h-10 text-[#5A7D66] mx-auto mb-2 opacity-80" />
            <h2 className="text-xl font-serif text-[#0F1F18] mb-1">
              {!showSuccess ? "¡Confirmación Especial!" : "¡Confirmación Enviada!"}
            </h2>
            <p className="text-[9px] uppercase tracking-widest text-[#4A6B55] font-bold">
              {!showSuccess ? "Confirma tu asistencia" : "¡Gracias por confirmar!"}
            </p>
            <div className="w-12 h-px bg-[#A8E1B5] mx-auto my-2"></div>
          </div>
          
          {!showSuccess ? (
            <>
              {/* Invitación válida para 2 personas */}
              <div className="bg-gradient-to-r from-[#A8E1B5]/30 to-[#6BA37A]/30 rounded-2xl p-4 mb-5 border border-[#A8E1B5]/50 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users size={18} className="text-[#4A6B55]" />
                  <span className="text-sm font-bold text-[#2D3A32]">Invitación válida para</span>
                </div>
                <p className="text-2xl font-serif font-bold text-[#0F1F18]">2 personas</p>
                <p className="text-[10px] text-[#4A6B55] mt-1">✨ Te esperamos con los brazos abiertos ✨</p>
              </div>
              
              {/* Detalles del evento */}
              <div className="bg-white/80 rounded-2xl p-3 mb-5 border border-[#A8E1B5]/30">
                <h3 className="text-[10px] font-bold text-[#4A6B55] uppercase tracking-wider text-center mb-2">
                  📋 Resumen del Evento
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-[#0F1F18]">
                    <Calendar size={11} /> <span className="text-[11px]">Domingo 24 de Mayo, 2026 - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0F1F18]">
                    <MapPin size={11} /> <span className="text-[11px]">Asociación Santa Rosa</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0F1F18]">
                    <span>👗</span> <span className="text-[11px]">Vestimenta: Sport Elegante</span>
                  </div>
                </div>
              </div>
              
              {/* Botón confirmar */}
              <button
                onClick={handleConfirmAndSend}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#4A6B55] to-[#2D3A32] text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 active:scale-95"
              >
                <Send size={14} />
                Enviar Confirmación por WhatsApp
              </button>
            </>
          ) : (
            /* Pantalla de confirmación exitosa - SIN CIERRE AUTOMÁTICO */
            <div className="text-center py-6 animate-bounceIn">
              <div className="w-24 h-24 rounded-full bg-[#A8E1B5] mx-auto mb-5 flex items-center justify-center">
                <Heart size={40} className="text-white" />
              </div>
              
              <div className="bg-white/90 rounded-xl p-5 mb-4 border border-[#A8E1B5]/30">
                <p className="text-[#2D3A32] text-lg font-bold mb-3">
                  ✅ ¡Confirmación enviada!
                </p>
                <p className="text-[#5A7D66] text-base font-serif italic">
                  "Te esperamos para celebrar juntos"
                </p>
              </div>
              
              <div className="mt-5 pt-3 border-t border-[#A8E1B5]/30">
                <p className="text-[11px] text-[#4A6B55] font-medium">
                  ✨ ¡Gracias por confirmar tu asistencia! ✨
                </p>
                <p className="text-[9px] text-[#4A6B55] mt-2 opacity-70">
                  WhatsApp se ha abierto para enviar tu mensaje
                </p>
              </div>
            </div>
          )}
          
          {/* Footer */}
          {!showSuccess && (
            <p className="text-[7px] text-center text-[#4A6B55] mt-4 opacity-60">
              ✨ Los esperamos para compartir juntos este día tan especial ✨
            </p>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.5s ease-out;
        }
        
        /* Responsive para móviles */
        @media (max-width: 640px) {
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        }
      `}</style>
    </div>
  );
};

export default TarjetaInvitacion;